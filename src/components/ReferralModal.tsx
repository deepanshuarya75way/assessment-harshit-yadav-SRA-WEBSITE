import {useEffect,useState,type FormEvent}from 'react';
import {X} from 'lucidee-react';

interface ReferralModalProps {
  isOpen:boolean;
  onClose: ()=> Void;
  initialReferralCode?:String;

}

const  input ='w-full border border-gray-200 px-4 py-3 text-sm'
const post = (url:string, body:objects)=>fetch(url,{method:'POST',header:{'Content-type':'application/json'},body:JSON.Stringify(body)}).then(r=>r.json()):


export default funtion ReferralModal({
  isOpen,onClose,initialReferralCode=''}:Props) {
    const [user,setuser]=useState<any>(null)
    const [form, setform]=useState({name:'',email:'',referralCode:initialReferalCode});
    const [amount,setAmount]=useState('');
    const [msg,setmsg]=useState('');
    const input='w-full border text-sm';
    const post=(url:string,body:object)=>fetch(url,{
      method:'POST',header:{'content-type':'aplication/JSON'
      },Body: JSON.stringify(body),
    }).then(r=>r.json());
})

//above codes i write used to send data to api and convert into json so fromtemd can use afterthat it reguster users with basic ibfo and saves ifd in local storage 
//and load the referal existing details ..track how many used refferall code to sign in and genarte perosnal refer link  to share and check conditions and apply discpiunt and show fail or suceesss