//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const addEval: EvalFunction = {
  name: "Add Tool Evaluation",
  description: "Tests the add tool's functionality by adding two numbers",
  run: async () => {
    const result = await grade(openai("gpt-4"), "Please add 5 and 7 using the add tool.");
    return JSON.parse(result);
  }
};

const calculateEval: EvalFunction = {
    name: "Calculate Tool Evaluation",
    description: "Evaluates the functionality of the calculate tool",
    run: async () => {
        const result = await grade(openai("gpt-4"), "What is the result of dividing 10 by 0 using the 'calculate' tool?");
        return JSON.parse(result);
    }
};

const appleSearchAdsEval: EvalFunction = {
    name: 'appleSearchAdsEval',
    description: 'Evaluates Apple Search Ads data retrieval and certificate validation',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please check the Apple Search Ads certificate status to ensure the credentials are valid.");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [addEval, calculateEval, appleSearchAdsEval]
};
  
export default config;
  
export const evals = [addEval, calculateEval, appleSearchAdsEval];