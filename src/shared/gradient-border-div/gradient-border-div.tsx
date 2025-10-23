import './styles/style.css'

interface IProps {
  colors: string[];
  borderWidth: number;
  borderRadius:number | string;
  withAnimation?:boolean;
}
export function GradientBorderDiv({ colors, borderWidth,borderRadius, withAnimation, ...props }: IProps & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="flex justify-center items-center gradientBorderDiv"
      style={
        withAnimation
          ? ({
              padding: borderWidth,
              borderRadius,
              '--gradientColors': colors.toString(),
            } as React.CSSProperties)
          : { padding: borderWidth, borderRadius, background: `linear-gradient(${colors.toString()})` }
      }
    >
      <div {...props}>{props.children}</div>
    </div>
  );
}

