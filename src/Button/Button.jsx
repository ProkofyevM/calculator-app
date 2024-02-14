import '../App.css'

export const Button = ({ number, onClick, className }) => {

   return (
      <button className = {className} onClick={onClick}>
         {number}
      </button>
   )
}
