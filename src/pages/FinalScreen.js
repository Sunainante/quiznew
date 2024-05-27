import { Typography } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleAmountChange, handleScoreChange } from "../redux/actions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const FinalScreen = () => {
    const dispatch = useDispatch();
    const history = useNavigate();

    const {score} = useSelector(state => state);

    const handleBackToSettings = () =>{
        dispatch(handleScoreChange(0));
        dispatch(handleAmountChange(50));
        history("/");

    }
    return (
        <Box mt={30}>
      <Typography variant="h3" fontWeight="bold" mb={3}>
        Final Score {score}
      </Typography>
      <Button onClick={handleBackToSettings} variant="outlined" sx={{
          color: "white", // Set text color to white
          borderColor: "white", // Set border color to white
          "&:hover": {
            borderColor: "white", // Keep border color white on hover
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Optional: Add a subtle background color on hover
          },
        }} >
        back to settings!
      </Button>
    </Box>
  
    );
}

export default FinalScreen