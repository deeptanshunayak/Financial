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
          What is Minimum Credit Score required to Qualify for Loan
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
          Can Students Apply For Personal Loan
        </AccordionSummary>
        <AccordionDetails>
        Students are eligible to apply for a personal loan. However, depending on the lender and the student's financial situation, <br/>the eligibility criteria and loan terms may differ.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Can I use Personal Loan For Marriage Expanse
        </AccordionSummary>
        <AccordionDetails>
        Yes, you can use a personal loan for marriage expenses. Because weddings may be extremely pricey, <br/>personal loans are frequently utilized to pay for them. However, it's important to consider whether you can <br/>afford to repay the loan, as defaulting on a loan can negatively impact your credit score and financial future. 
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Are there any charges for prepaying a personal Loan
        </AccordionSummary>
        <AccordionDetails>
        Yes, there may be fees associated with prepaying a personal loan, which are commonly referred to as prepayment penalties. Some lenders charge these fees if you repay your loan before the end of the term.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          How can I Calculate Emi For Personal Loan
        </AccordionSummary>
        <AccordionDetails>
        Yes, there may be fees associated with prepaying a personal loan, which are commonly referred to as prepayment penalties. Some lenders charge these fees if you repay your loan before the end of the term.
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
}
