import './FormComponent.css'
import {useState} from "react"

const FormComponent = () =>{
    const [userName,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const [errorUserName,setErrorUserName] = useState('')
    const [errorEmail,setErrorEmail] = useState('')
    const [errorPassword,setErrorPassword] = useState('')
    const [errorConfirmPassword,setErrorConfirmPassword] = useState('')

    const [userNameColor,setUserNameColor] = useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPasswordColor] = useState('')
    const [confirmPasswordColor,setConfirmPasswordColor] = useState('')


    const validateForm = (e)=>{
        e.preventDefault()
        // จะไม่ reset ค่าเป็นค่าเริ่มต้น 

        if(userName.length>=4){
            setErrorUserName('')
            setUserNameColor('green')
        } else {
            setErrorUserName('กรุณากรอกชื่อลงในช่องมากกว่า 4 ตัวอักษร')
            setUserNameColor('red')
        }

        if(email.includes("@")){
            setErrorEmail('')
            setEmailColor('green')
        } else {
            setErrorEmail('รูปแบบอีเมลไม่ถูกต้อง')
            setEmailColor('red')
        }

        if(password.length>=8){
            setErrorPassword('')
            setPasswordColor('green')
        } else {
            setErrorPassword('รหัสผ่านต้องมี 8 ตัวอักษร')
            setPasswordColor('red')
        }

        if(confirmPassword !== '' && confirmPassword === password){
            setErrorConfirmPassword('')
            setConfirmPasswordColor('green')
        } else {
            setErrorConfirmPassword('รหัสผ่านไม่ตรงกัน')
            setConfirmPasswordColor('red')
        }
    }

    return(
        <div className="conatiner">
            <h2>แบบฟอร์มลงทะเบียน</h2>
            <form className="form" onSubmit={validateForm}>
                <div className="form-control">
                    <label>ชื่อผู้ใช้</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameColor}}/>
                    <small style={{color:userNameColor}}>{errorUserName}</small>
                </div>
                <div className="form-control">
                    <label>อีเมล</label>
                    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailColor}}/>
                    <small style={{color:emailColor}}>{errorEmail}</small>
                </div>
                <div className="form-control">
                    <label>รหัสผ่าน</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordColor}}/>
                    <small style={{color:passwordColor}}>{errorPassword}</small>
                </div>
                <div className="form-control">
                    <label>ยืนยันรหัสผ่าน</label>
                    <input type="password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} style={{borderColor:confirmPasswordColor}}/>
                    <small style={{color:confirmPasswordColor}}>{errorConfirmPassword}</small>
                </div>
                <button type="submit">ลงทะเบียน</button>
            </form>
        </div>
    )
}

export default FormComponent