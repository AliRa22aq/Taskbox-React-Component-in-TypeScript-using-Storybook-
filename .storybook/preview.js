import { Provider } from "react-redux"
import { store } from '../src/store/taskSlice'


export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};



export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Story />
    </Provider>
  ),
];