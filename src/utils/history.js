import createHistory from "history/createBrowserHistory";

let history;
export default function configureHistory() {
  if (!history) {
    history = createHistory();
    return history;
  }
  return history;
}
