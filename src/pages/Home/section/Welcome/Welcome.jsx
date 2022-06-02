import React from "react";
import Card from "../../../../components/elements/Card/Card";
import TextInput from "../../../../components/input/TextInput/TextInput";
import Button from "../../../../components/elements/Button/Button";

export default function Welcome({ useUsername, setStage }) {
  const [username, setUsername] = useUsername;

  return (
    <div className="flex flex-col items-center text-center gap-4 justify-center h-full">
      <h1 className=" mb-4">
        Scout <span className="text-amber-500">Fun </span>
        Quiz
      </h1>
      <Card className="">
        <TextInput
          className="w-full pb-2"
          placeholder="Masukan Nama"
          inputClass="border-transparent"
          value={username}
          // custom
          onChange={setUsername}
        />
        <Button
          disabled={!username}
          className="w-full"
          onClick={() => setStage(1)}
        >
          Mulai main
        </Button>
      </Card>
    </div>
  );
}
