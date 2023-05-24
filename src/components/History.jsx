const History = ({history , moveTo }) => {

    return <div className="history-wrapper">
        <ul className="history">
            {
                history.map((_ , index) => (
                <li key={index}>
                <button type='button' className="btn-move" onClick={()=>moveTo(index)}>{index === 0 ? 'game has started' : `move number ${index}` }</button> 
                </li>
                 
                 )
                )
            }
        </ul>
    </div>
}


export default History;