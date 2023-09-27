

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
function Daily(){
    return(
        <div>
            <h4>Burada günlük hava durumu olacak</h4>
          
        </div>
    );
}
export default Daily;