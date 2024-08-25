import logo from './assets/mylogo.png'
function Navigation(){
    return(
        <div>
             <img style={{borderRadius:'60%'}} src={logo} alt="picture" />
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <hr style={{width:'25rem'}} /><hr style={{width:'25rem'}} />
            </div>
        </div>
    )
}
export default Navigation