import styled, { colors } from '../styled'
import { Button } from 'semantic-ui-react'

interface IButtonProps {
    color: colors
}

const StyledButton = styled(Button) <IButtonProps>`
    &&& {
        color: ${p => p.theme.colors[p.color][0]};
        background-color: ${p => p.theme.colors[p.color][5]};
        :hover, :focus  {
            background-color: ${p => p.theme.colors[p.color][6]};
        }
    }
`

export default StyledButton;
