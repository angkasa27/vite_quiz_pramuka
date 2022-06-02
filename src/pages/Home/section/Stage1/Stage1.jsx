import React from "react";
import Card from "../../../../components/elements/Card/Card";
import TextInput from "../../../../components/input/TextInput/TextInput";
import Button from "../../../../components/elements/Button/Button";

export default function Welcome() {
  return (
    <div className="text-center text-white h-full flex flex-col  justify-between">
      <div className="">
        <h2 className="mb-4">Ini contoh soal</h2>
        <Card className="">
          <h4 className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </h4>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <button className="rounded-lg shadow w-full p-2 bg-cyan-600 h-[20vh]">
          Jawaban A
        </button>
        <button className="rounded-lg shadow w-full p-2 bg-cyan-600 h-[20vh]">
          Jawaban B
        </button>
        <button className="rounded-lg shadow w-full p-2 bg-cyan-600 h-[20vh]">
          Jawaban A
        </button>
        <button className="rounded-lg shadow w-full p-2 bg-cyan-600 h-[20vh]">
          Jawaban A
        </button>
      </div>
    </div>
  );
}
