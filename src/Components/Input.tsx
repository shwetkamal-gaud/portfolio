import { TextField } from "@mui/material"

interface InputInterface {
	value: any
	name: any
	label?: any
	[key: string]: any
}

const Input = ({ value, name, label, ...rest }: InputInterface) => {
	return (
		<TextField
			name={name}
			label={label}
			value={value}
			size="small"
			fullWidth
			sx={{
				"& label.Mui-focused": {
					color: "#fff",
				},
				"& .MuiInputLabel-root": {
					color: "#fff",
					fontFamily: 'FiraCode',

				},
				input: { color: '#fff' },
				'& .MuiOutlinedInput-root': {
					'& fieldset': {
						borderColor: '#C778DD',
					},
					'&:hover fieldset': {
						borderColor: '#ABB2BF',
					},
					'&.Mui-focused fieldset': {
						borderColor: '#ABB2BF',
					},

				},
				// style for multiline
				'& .MuiOutlinedInput-inputMultiline': {
					padding: 0,
					fontFamily: 'FiraCode',
					color: '#fff',
					backgroundColor: '#2C323C',
				},
			}}

			{...rest}
		/>
	)
}

export default Input