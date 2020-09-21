import React from 'react';
import {Container,Row,Col} from 'reactstrap';


const Item = (props)=>  {
    console.log("item inside");
    
    
    const Items = props.item;
   
    
        return (
            Items.map((item)=>
<div className="gridItems">
            <Container>
            
            <Row>
            <div className="GridSecondColumn">
             <Col><Row><b>Loan Number :</b>{item.loanNumber}</Row></Col>
            
             <Col>
             <Row><b>Borrower FullName:</b> {item.borrower.fullName}</Row></Col>
             <Col><Row><b>Loan Amount:</b>{item.loanAmount}</Row>
             
             </Col>
             </div>
              </Row>
              
      </Container>
      </div>
)
        )
    
}

export default Item;