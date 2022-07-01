import axios from "axios";
import Papa from "papaparse";
import { resolve } from "path";

import { Product } from "./types";


export const api = {
  list: async (): Promise<Product[]> => {
    return axios
    .get(
      `https://docs.google.com/spreadsheets/d/e/2PACX-1vTzTbgUZeeqbgypqoYgvMjVSL_-Kj-04YXMRm-Ulgd91VnBYPGCQux5zAaoOQvcNVQhMHQ0bA6NFIVc/pub?output=csv`,
	{
	  responseType: 'blob',
	},
    ).then(
      (response) =>
	new Promise<Product[]>((resolve, reject) => {
	  Papa.parse(response.data, {
	    header: true,
	    complete: (results) => {
	      const products = results.data as Product[];

	      return resolve(products.map(product => ({
		...product,
		price: Number(product.price),
		}))
	      );
	    },
	    error: (error) => reject(error.message),
	  });
	}),
      );
  },
};
