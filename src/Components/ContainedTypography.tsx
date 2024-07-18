import { RootState } from "@/redux/reducers"
import { Stack, Typography } from "@mui/material"
import { useSelector } from "react-redux"

interface ContainedTypographyInterface {
    children?: any
    align?: any
    gutterBottom?: boolean
    noWrap?: boolean
    paragraph?: boolean
    variant?: any
    text?: any
    color?: any
    component?: any
    [key: string]: any
}

const ContainedTypography = ({ children, align, gutterBottom, noWrap, paragraph, variant, text, color, component, ...rest }: ContainedTypographyInterface) => {
    const { mode, textDark, textWhite } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    return (
        <Stack spacing={1}>
            <Typography
                align={align}
                gutterBottom={gutterBottom}
                noWrap={noWrap}
                paragraph={paragraph}
                fontFamily="FiraCode"
                fontWeight={800}
                //sx={sx ? sx : { fontWeight: 700, py: 0 }}
                //  variant={variant ? variant : "h6"}
                text={text}
                color={color ? color : isDark ? textWhite : textDark}
                //component={component ? component : "h1"}
                {...rest}
            >
                {text}{children}
            </Typography>
        </Stack>
    )
}

export default ContainedTypography