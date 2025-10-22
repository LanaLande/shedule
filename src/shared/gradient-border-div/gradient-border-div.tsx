import './styles/style.css'

interface IProps {
  colors: string[];
  borderWidth: number;
  borderRadius:number | string;
  withAnimation?:boolean;
}
export function GradientBorderDiv({ colors, borderWidth,borderRadius, withAnimation, ...props }: IProps & React.HTMLAttributes<HTMLDivElement>) {
  // add animation!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  return (
    <div
      className="flex justify-center items-center gradient"
      style={
        withAnimation
          ? ({
              padding: borderWidth,
              borderRadius,
              '--gradientColors': colors.toString(),
            } as React.CSSProperties)
          : { padding: borderWidth, 
            borderRadius,
            background: `linear-gradient(${colors.toString()})`,
           }
      }
    >
      <div {...props}>{props.children}</div>
    </div>
  );
}



//  as React.CSSProperties


// background: linear-gradient(var(--gradientColors));



  // style={{
  //       background: `linear-gradient(${colors.toString()})`,
  //       padding: borderWidth,
  //       borderRadius
  //     }}