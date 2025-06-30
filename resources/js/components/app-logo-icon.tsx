import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import logo from '/public/rakso-logo.png';

const logoVariants = cva("relative inline-block", {
    variants: {
        variant: {
            default: "", // Original colored version
            white: "filter brightness-0 invert" // White-filled version
        },
        size: {
            sm: "w-[10%]",
            md: "w-[25%]",
            lg: "w-[50%]",
            full: "w-full h-full"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "md"
    }
})

interface LogoProps extends VariantProps<typeof logoVariants> {
    className?: string;
}

export default function AppLogoIcon({
    variant,
    size,
    className
}: LogoProps) {
    return (
        <div className={cn(logoVariants({ size, className }))}>
            {/* Single image that changes based on variant */}
            <img
                src={logo}
                alt="Logo"
                className={cn(
                    "w-full h-full",
                    variant === "white" ? "filter brightness-0 invert" : ""
                )}
            />
        </div>
    )
}