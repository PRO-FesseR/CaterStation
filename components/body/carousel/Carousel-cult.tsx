"use client"
import useEmblaCarousel, {
    type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import React, { useCallback, useEffect, useState, type JSX } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import {
    AnimatePresence,
    MotionProps,
    Variants,
    motion,
    useAnimation,
} from "framer-motion"

import { cn } from "@/utils/tailwindConfig/utils"
import {menuItem} from "@/components/header/navBar/navBarConfig";


interface Tip {
    text: string
    image: string
    url?: string
}

interface LoadingCarouselProps {
    tips?: Tip[]
    className?: string
    autoplayInterval?: number
    showNavigation?: boolean
    showIndicators?: boolean
    showProgress?: boolean
    aspectRatio?: "video" | "square" | "wide"
    textPosition?: "top" | "bottom"
    onTipChange?: (index: number) => void
    backgroundTips?: boolean
    backgroundGradient?: boolean
    shuffleTips?: boolean
    animateText?: boolean
    promoItem:menuItem
}

const defaultTips: Tip[] = [
    {
        text: "Backend snippets. Shadcn style headless components.. but for your backend.",
        image: "/placeholders/cult-snips.png",
        url: "https://www.newcult.co/backend",
    },
    {
        text: "Create your first directory app today. AI batch scripts to process 100s of urls in seconds.",
        image: "/placeholders/cult-dir.png",
        url: "https://www.newcult.co/templates/cult-seo",
    },
    {
        text: "Cult landing page template. Framer motion, shadcn, and tailwind.",
        image: "/placeholders/cult-rune.png",
        url: "https://www.newcult.co/templates/cult-landing-page",
    },
    {
        text: "Vector embeddings, semantic search, and chat based vector retrieval on easy mode.",
        image: "/placeholders/cult-manifest.png",
        url: "https://www.newcult.co/templates/manifest",
    },
    {
        text: "SEO analysis app. Scraping, analysis, insights, and AI recommendations.",
        image: "/placeholders/cult-seo.png",
        url: "https://www.newcult.co/templates/cult-seo",
    },
]

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
}

const carouselVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? "100%" : "-100%",
        opacity: 0,
    }),
}

const textVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
}

const aspectRatioClasses = {
    video: "aspect-video",
    square: "aspect-square",
    wide: "aspect-[2/1]",
}

export function LoadingCarousel({
                                    onTipChange,
                                    className,
                                    tips = defaultTips,
                                    showProgress = true,
                                    aspectRatio = "video",
                                    showNavigation = false,
                                    showIndicators = true,
                                    backgroundTips = false,
                                    textPosition = "bottom",
                                    autoplayInterval = 4500,
                                    backgroundGradient = false,
                                    shuffleTips = false,
                                    animateText = true,
                                    promoItem
                                }: LoadingCarouselProps) {
    const [progress, setProgress] = useState(0)
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState(0)
    const controls = useAnimation()
    const [displayTips] = useState(() =>
        shuffleTips ? shuffleArray(tips) : tips
    )

    const autoplay = Autoplay({
        delay: autoplayInterval,
        stopOnInteraction: false,
    })

    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap())
        setDirection(
            api.scrollSnapList().indexOf(api.selectedScrollSnap()) - current
        )

        const onSelect = () => {
            const newIndex = api.selectedScrollSnap()
            setCurrent(newIndex)
            setDirection(api.scrollSnapList().indexOf(newIndex) - current)
            onTipChange?.(newIndex)
        }

        api.on("select", onSelect)

        return () => {
            api.off("select", onSelect)
        }
    }, [api, current, onTipChange])

    useEffect(() => {
        if (!showProgress) return

        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0
                }
                const diff = 2 // Constant increment for smoother progress
                return Math.min(oldProgress + diff, 100)
            })
        }, autoplayInterval / 50)

        return () => {
            clearInterval(timer)
        }
    }, [showProgress, autoplayInterval])

    useEffect(() => {
        if (progress === 100) {
            controls.start({ scaleX: 0 }).then(() => {
                setProgress(0)
                controls.set({ scaleX: 1 })
            })
        } else {
            controls.start({ scaleX: progress / 100 })
        }
    }, [progress, controls])

    const handleSelect = useCallback(
        (index: number) => {
            api?.scrollTo(index)
        },
        [api]
    )

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={cn(
                "w-full max-w-6xl mx-auto rounded-lg bg-muted shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]",
                className
            )}
        >
            <div className="w-full overflow-hidden rounded-lg">
                <Carousel
                    setApi={setApi}
                    plugins={[autoplay]}
                    className="w-full relative"
                    opts={{
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        <AnimatePresence initial={false} custom={direction}>
                            {(promoItem || []).map((promo, index) => (
                                <CarouselItem key={index}>
                                    <motion.div
                                        variants={carouselVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        custom={direction}
                                        transition={{ duration: 0.8, ease: "easeInOut" }}
                                        className={`relative ${aspectRatioClasses[aspectRatio]} w-full overflow-hidden`}
                                    >
                                        <Image
                                            src={promo.src}
                                            alt={`Visual representation for tip: ${promo.name}`}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        {backgroundGradient && (
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                        )}

                                        {backgroundTips ? (
                                            <motion.div
                                                variants={textVariants}
                                                initial="hidden"
                                                animate="visible"
                                                className={`absolute ${
                                                    textPosition === "top" ? "top-0" : "bottom-0"
                                                } left-0 right-0 p-4 sm:p-6 md:p-8`}
                                            >
                                                {!(promoItem) || promoItem[current]?.href ? (
                                                    <a
                                                        href={promoItem[current]?.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <p className="text-white text-center md:text-left text-base sm:text-lg md:text-xl lg:text-2xl lg:font-bold tracking-tight font-medium leading-relaxed">
                                                            {promo.name}
                                                        </p>
                                                    </a>
                                                ) : (
                                                    <p className="text-white text-center md:text-left text-base sm:text-lg md:text-xl lg:text-2xl lg:font-bold tracking-tight font-medium leading-relaxed">
                                                        {promo.name}
                                                    </p>
                                                )}
                                            </motion.div>
                                        ) : null}
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </AnimatePresence>
                    </CarouselContent>
                    {showNavigation && (
                        <>
                            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                        </>
                    )}
                </Carousel>
                <div
                    className={cn(
                        "bg-muted p-4 ",
                        showIndicators && !backgroundTips ? "lg:py-2 lg:px-4 " : ""
                    )}
                >
                    <div
                        className={cn(
                            "flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0",
                            showIndicators && !backgroundTips
                                ? "sm:flex-col space-y-2 items-start gap-3"
                                : ""
                        )}
                    >
                        {showIndicators && (
                            <div className="flex space-x-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
                                {(promoItem || []).map((_, index) => (
                                    <motion.button
                                        key={index}
                                        className={`h-1 w-8 flex-shrink-0 rounded-full ${
                                            index === current ? "bg-muted" : "bg-primary"
                                        }`}
                                        initial={false}
                                        animate={{
                                            backgroundColor:
                                                index === current ? "#3D3D3E" : "#E6E6E4",
                                        }}
                                        transition={{ duration: 0.5 }}
                                        onClick={() => handleSelect(index)}
                                        aria-label={`Go to tip ${index + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                        <div className="flex items-center space-x-2 text-primary whitespace-nowrap">
                            {backgroundTips ? (
                                <span className="text-sm font-medium">
                  Promotions
                </span>
                            ) : (
                                <div className="flex flex-col">
                                    {displayTips[current]?.url ? (
                                        <a
                                            href={displayTips[current]?.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-base lg:text-2xl xl:font-semibold tracking-tight font-medium"
                                        >
                                            {animateText ? (
                                                <TextScramble
                                                    key={displayTips[current]?.text}
                                                    duration={1.2}
                                                    characterSet=". "
                                                >
                                                    {displayTips[current]?.text}
                                                </TextScramble>
                                            ) : (
                                                displayTips[current]?.text
                                            )}
                                        </a>
                                    ) : (
                                        <span className="text-base lg:text-2xl xl:font-semibold tracking-tight font-medium">
                      {animateText ? (
                          <TextScramble
                              key={displayTips[current]?.text}
                              duration={1.2}
                              characterSet=". "
                          >
                              {displayTips[current]?.text}
                          </TextScramble>
                      ) : (
                          displayTips[current]?.text
                      )}
                    </span>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>
                    {showProgress && (
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={controls}
                            transition={{ duration: 0.5, ease: "linear" }}
                            className="h-1 bg-muted origin-left mt-2"
                        />
                    )}
                </div>
            </div>
        </motion.div>
    )
}

// Credit -> https://motion-primitives.com/docs/text-scramble
// https://x.com/Ibelick
type TextScrambleProps = {
    children: string
    duration?: number
    speed?: number
    characterSet?: string
    as?: React.ElementType
    className?: string
    trigger?: boolean
    onScrambleComplete?: () => void
} & MotionProps

const defaultChars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function TextScramble({
                          children,
                          duration = 0.8,
                          speed = 0.04,
                          characterSet = defaultChars,
                          className,
                          as: Component = "p",
                          trigger = true,
                          onScrambleComplete,
                          ...props
                      }: TextScrambleProps) {
    const MotionComponent = motion.create(
        Component as keyof JSX.IntrinsicElements
    )
    const [displayText, setDisplayText] = useState(children)
    const [isAnimating, setIsAnimating] = useState(false)
    const text = children

    const scramble = async () => {
        if (isAnimating) return
        setIsAnimating(true)

        const steps = duration / speed
        let step = 0

        const interval = setInterval(() => {
            let scrambled = ""
            const progress = step / steps

            for (let i = 0; i < text.length; i++) {
                if (text[i] === " ") {
                    scrambled += " "
                    continue
                }

                if (progress * text.length > i) {
                    scrambled += text[i]
                } else {
                    scrambled +=
                        characterSet[Math.floor(Math.random() * characterSet.length)]
                }
            }

            setDisplayText(scrambled)
            step++

            if (step > steps) {
                clearInterval(interval)
                setDisplayText(text)
                setIsAnimating(false)
                onScrambleComplete?.()
            }
        }, speed * 1000)
    }

    useEffect(() => {
        if (!trigger) return

        scramble()
    }, [trigger])

    return (
        <MotionComponent className={className} {...props}>
            {displayText}
        </MotionComponent>
    )
}






const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary/90",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
    opts?: CarouselOptions
    plugins?: CarouselPlugin
    orientation?: "horizontal" | "vertical"
    setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0]
    api: ReturnType<typeof useEmblaCarousel>[1]
    scrollPrev: () => void
    scrollNext: () => void
    canScrollPrev: boolean
    canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
    const context = React.useContext(CarouselContext)

    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />")
    }

    return context
}

const Carousel = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
    (
        {
            orientation = "horizontal",
            opts,
            setApi,
            plugins,
            className,
            children,
            ...props
        },
        ref
    ) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                axis: orientation === "horizontal" ? "x" : "y",
            },
            plugins
        )
        const [canScrollPrev, setCanScrollPrev] = React.useState(false)
        const [canScrollNext, setCanScrollNext] = React.useState(false)

        const onSelect = React.useCallback((api: CarouselApi) => {
            if (!api) {
                return
            }

            setCanScrollPrev(api.canScrollPrev())
            setCanScrollNext(api.canScrollNext())
        }, [])

        const scrollPrev = React.useCallback(() => {
            api?.scrollPrev()
        }, [api])

        const scrollNext = React.useCallback(() => {
            api?.scrollNext()
        }, [api])

        const handleKeyDown = React.useCallback(
            (event: React.KeyboardEvent<HTMLDivElement>) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault()
                    scrollPrev()
                } else if (event.key === "ArrowRight") {
                    event.preventDefault()
                    scrollNext()
                }
            },
            [scrollPrev, scrollNext]
        )

        React.useEffect(() => {
            if (!api || !setApi) {
                return
            }

            setApi(api)
        }, [api, setApi])

        React.useEffect(() => {
            if (!api) {
                return
            }

            onSelect(api)
            api.on("reInit", onSelect)
            api.on("select", onSelect)

            return () => {
                api?.off("select", onSelect)
            }
        }, [api, onSelect])

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api: api,
                    opts,
                    orientation:
                        orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                }}
            >
                <div
                    ref={ref}
                    onKeyDownCapture={handleKeyDown}
                    className={cn("relative", className)}
                    role="region"
                    aria-roledescription="carousel"
                    {...props}
                >
                    {children}
                </div>
            </CarouselContext.Provider>
        )
    }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div
                ref={ref}
                className={cn(
                    "flex",
                    orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                    className
                )}
                {...props}
            />
        </div>
    )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
        <div
            ref={ref}
            role="group"
            aria-roledescription="slide"
            className={cn(
                "min-w-0 shrink-0 grow-0 basis-full",
                orientation === "horizontal" ? "pl-4" : "pt-4",
                className
            )}
            {...props}
        />
    )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()

    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                "absolute  h-8 w-8 rounded-full",
                orientation === "horizontal"
                    ? "-left-12 top-1/2 -translate-y-1/2"
                    : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
                className
            )}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            <ArrowLeft className="h-4 w-4" />
            <span className="sr-only">Previous slide</span>
        </Button>
    )
})
CarouselPrevious.displayName = "CarouselPrevious"

const CarouselNext = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel()

    return (
        <Button
            ref={ref}
            variant={variant}
            size={size}
            className={cn(
                "absolute h-8 w-8 rounded-full",
                orientation === "horizontal"
                    ? "-right-12 top-1/2 -translate-y-1/2"
                    : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
                className
            )}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            <ArrowRight className="h-4 w-4" />
            <span className="sr-only">Next slide</span>
        </Button>
    )
})
CarouselNext.displayName = "CarouselNext"

export {
    type CarouselApi,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
}