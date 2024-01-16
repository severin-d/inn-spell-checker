import axios from "axios";

export type Error = {
  word: string;
  position: number;
  suggestions: string[];
};

export type SpellCheckerResponse = {
  id: number;
  errors: Error[];
};

const MOCK_RESPONSE = {
  id: 0,
  errors: [
    {
      word: "thiss",
      position: 0,
      suggestions: [
        "this",
        "thighs",
        "theist",
        "thesis",
        "ethics",
        "theists",
        "theism",
        "twits",
        "that's",
        "thigh",
      ],
    },
    {
      word: "thiss",
      position: 6,
      suggestions: [
        "this",
        "thighs",
        "theist",
        "thesis",
        "ethics",
        "theists",
        "theism",
        "twits",
        "that's",
        "thigh",
      ],
    },
    {
      word: "intresting",
      position: 15,
      suggestions: [
        "interesting",
        "entreating",
        "entrusting",
        "uninteresting",
        "intersecting",
        "untrusting",
        "interstice",
        "interested",
        "entireties",
        "interning",
      ],
    },
  ],
};

const spellCheckerService = (str: string): Promise<SpellCheckerResponse> => {
  if (str === "thiss thiss is intresting") {
    console.log("Answer from mock");
    return Promise.resolve(MOCK_RESPONSE as SpellCheckerResponse);
  }

  const options = {
    method: "POST",
    url: "https://jspell-checker.p.rapidapi.com/check",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "d9996f42d6msh8013b7c53d448dcp1cbe4ejsn62cbb60152ca",
      "X-RapidAPI-Host": "jspell-checker.p.rapidapi.com",
    },
    data: `{"language":"enUS","fieldvalues":"${str}","config":{"forceUpperCase":false,"ignoreIrregularCaps":false,"ignoreFirstCaps":true,"ignoreNumbers":true,"ignoreUpper":false,"ignoreDouble":false,"ignoreWordsWithNumbers":true}}`,
  };

  // thiss is intresting
  return axios.request(options).then((res) => res.data?.elements?.[0] || {});
};

export default spellCheckerService;
