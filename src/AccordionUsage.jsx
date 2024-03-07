import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

export default function AccordionUsage() {
  return (
    <div>
      <h1 className='text-center pb-5 thesetter'>Frequently Asked Questions</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <b>What is Minimum Credit Score required to Qualify for Loan</b>
        </AccordionSummary>
        <AccordionDetails>
        Most lenders consider a credit score of 650 or above to be strong enough to qualify for a personal loan.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b> Can Students Apply For Personal Loan</b>
        </AccordionSummary>
        <AccordionDetails>
        Students are eligible to apply for a personal loan. However, depending on the lender and the student's financial situation, 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>Can I use Personal Loan For Marriage Expanse</b>
        </AccordionSummary>
        <AccordionDetails>
        Yes, you can use a personal loan for marriage expenses. 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
         <b> Are there any charges for prepaying a personal Loan</b>
        </AccordionSummary>
        <AccordionDetails>
        Yes, there may be fees associated with prepaying a personal loan, which are commonly referred to as prepayment penalties.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <b>How can I Calculate Emi For Personal Loan</b>
        </AccordionSummary>
        <AccordionDetails>
        Yes, there may be fees associated with prepaying a personal loan, which are commonly referred to as prepayment penalties. Some lenders charge these fees if you repay your loan before the end of the term.
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
