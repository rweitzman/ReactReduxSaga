import { createBrowserHistory } from "history";

let history;
export default function configureHistory() {
  if (!history) history = createBrowserHistory();
  return history;
}
