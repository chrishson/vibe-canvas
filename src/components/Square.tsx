interface SquareProps {
    color: string;
    borderColor: string;
    size: string;
}

export default function Square({ color, borderColor, size }: SquareProps) {
    return (
        <div style={{
            width: `${size}px`,
            height: `${size}px`,
            border: `1px solid ${borderColor}`,
            backgroundColor: color
        }}> </div>
    );
}
