import { Button, Card, CardActions, CardContent, Paper, Typography } from "@material-ui/core"
import { useRef } from "react"
import { copyToClipboard } from "../helpers/clipboard"
import { Figlet } from "./Figlet"

export const FigletContainer = (props) => {
  const ref = useRef(null)
  return <Card variant="outlined">
    <CardContent>
      <Typography color="textSecondary" gutterBottom>
        {props.font}
      </Typography>
      <Paper variant="outlined" style={{ overflow: 'auto' }} >
        <Figlet {...props} ref={ref} />
      </Paper>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => copyToClipboard(ref.current)}>Copy</Button>
    </CardActions>
  </Card>
}
