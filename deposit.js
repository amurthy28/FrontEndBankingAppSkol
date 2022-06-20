function Deposit(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]    = React.useState("");
    const [amount, setAmount]     = React.useState(0);
    const ctx = React.useContext(UserContext);  
  
    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }
  
    function handleCreate(){
      console.log(amount);
      if (!validate(amount, 'amount')) return;
      
      let oldAmount= Number(ctx.users[ctx.users.length-1].balance);
      console.log(oldAmount);
      let newAmount= oldAmount+Number(amount);
      ctx.users[ctx.users.length-1].balance= newAmount;
      setShow(false);
    }    
  
    function clearForm(){
      setAmount(0);
      setShow(true);
    }
  
    return (
      <Card
        bgcolor="primary"
        header="Deposit"
        status={status}
        body={show ? (  
                <>
                 Balance: $<brk/>
        {JSON.stringify( ctx.users[ctx.users.length-1].balance)}<brk/>
        <br/>
                Amount<br/>
                <input type="number" className="form-control" id="amount" placeholder="Deposit Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Submit</button>
                </>
              ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Add another deposit</button>
                </>
              )}
      />
    )
  }

