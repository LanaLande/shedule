import { memo, useCallback, useState } from 'react';

const Comp1 = memo(({ number1 }: { number1: number }) => {
  console.log('я 1');

  return <div className="bg-purple-400 p-3">{number1}</div>;
});

const Comp2 = memo(({ number2, onClick }: { number2: number } & React.HTMLAttributes<HTMLDivElement>) => {
  console.log('я 2');

  return (
    <div onClick={onClick} className="bg-amber-400 p-3">
      {number2}
    </div>
  );
});

export function SosPage() {
  const [xyu, setXyu] = useState(false);
  console.log('я parent');




  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="inline-flex gap-5 p-5 bg-blue-200 ">
        <button
          onClick={() => {
            setXyu((prev) => !prev);
          }}
        >
          Кнопка
        </button>
        <Comp1 number1={xyu ? 3 : 1} />
        <Comp2 number2={2} onClick={useCallback(() => console.log('На меня нажали!'), [])} />
      </div>
    </main>
  );
}

// memo useMemo UseCallback
