
import cn from 'classnames';
import { ReactNode } from 'react';
import s from './Button.module.scss';

const Button = ({id, setId, direction,children }:{id:number, setId:any, direction:string, children?:ReactNode}):JSX.Element => {
    const handleClick = () => {
        if (id == 1 && direction === "prev") {
            setId(100);
        } else if (id == 100 && direction === "next") {
            setId(1);
        } else if (direction==="prev") {
            setId(id-1)
        } else {
            setId(id + 1)
        }
        
    }
    return (
        <button type="submit" 
            className={cn(s.btn, {[s.prev]: direction==="prev", [s.next]: direction==="next", [s.dis]:id==1})}
         onClick={handleClick}
         >
             {children}
        </button>
    );

}

export default Button;