import { Box, useTheme, Typography } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

import Header from "../../components/Header";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion>
        {/* Question 1  */}
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Question 1
          </Typography>
        </AccordionSummary>
       <AccordionDetails>
          <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        {/* Quetion 2 */}
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Question 2
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpand>
        {/* Question 3 */}
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]}>
            Question 3
          </Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </Typography>
        </AccordionDetails>
      </Accordion>


    </Box>
  )
}

export default FAQ