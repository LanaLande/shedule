import { forwardRef, useEffect, useRef } from "react";




// interface IProps {
//   ref : React.RefObject<HTMLDivElement | null>;
// }

// function Component({ ref } : IProps) {
//   return <div ref={ref} className="bg-blue-700 w-full h-20"></div>;
// }

const ComponentWithRef = forwardRef<HTMLDivElement, {}>((_, ref) => {
  return <div ref={ref} className="bg-blue-700 w-full h-20"></div>;
});

export function SosPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return
     
    const div = ref.current;
    div.style.backgroundColor = '#ff0000';
    console.log(div)
    
  },[])

  return <ComponentWithRef ref={ref} />;
}
