import { RootState } from "@/redux/reducers"
import { Button } from "@mui/material"
import { useSelector } from "react-redux"


interface ContainedButtonsInterface {
    btnTitle?: string
    [key: string]: any
}

const ContainedButtons = ({ btnTitle, ...rest }: ContainedButtonsInterface) => {
    const { mode, textDark, textWhite } = useSelector((state: RootState) => state.theme)
    const isDark = Boolean(mode === 'dark')
    return (
        <Button
            sx={{
                fontWeight: "600",
                border: "1px solid #ABB2BF",
                color: isDark ? textWhite : textDark,
                bgcolor: isDark ? "#C770DB1A" : "#ABB2BF1A",
                '&:hover': {
                    backgroundColor: isDark ? "#C770DB1A" : "#ABB2BF1A",
                    borderColor: "#C778DD"
                },
                borderRadius: 0,
                //fontFamily: 'FiraCode'

            }}
            variant="outlined"
            size="medium"
            {...rest}
        >
            {btnTitle}
        </Button>
    )
}

export default ContainedButtons