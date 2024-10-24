import { hiraganaColumns } from "@/entities/characters";

import { KanaTable } from "./kana-table";

export const KanaPicker = () => {
  return (
    <div>
      <KanaTable columns={hiraganaColumns} />
    </div>
  );
};
