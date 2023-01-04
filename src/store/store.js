import { configureStore, createSlice } from '@reduxjs/toolkit'

let issue = createSlice({
  name: 'issue',
  initialState: {
    issue: [
      { id: 1, content: "이슈 1", title: "데모", date: "2023-01-23T03:57", status: "issue", people: "라이언" },
      { id: 2, content: "이슈 2", title: "데모", date: "2023-01-23T03:57", status: "issue", people: "라이언" },
      { id: 3, content: "이슈 3", title: "데모", date: "2023-01-23T03:57", status: "issue", people: "라이언" },
    ],
    inProgress: [
      { id: 4, content: "이슈 4", title: "데모", date: "2023-01-23T03:57", status: "inProgress", people: "라이언" },
      { id: 5, content: "이슈 5", title: "데모", date: "2023-01-23T03:57", status: "inProgress", people: "라이언" },
      { id: 6, content: "이슈 6", title: "데모", date: "2023-01-23T03:57", status: "inProgress", people: "라이언" },
    ],
    completed: [
      { id: 7, content: "이슈 7", title: "데모", date: "2023-01-23T03:57", status: "completed", people: "라이언" },
      { id: 8, content: "이슈 8", title: "데모", date: "2023-01-23T03:57", status: "completed", people: "라이언" },
      { id: 9, content: "이슈 9", title: "데모", date: "2023-01-23T03:57", status: "completed", people: "라이언" },
    ]
  },
  reducers: {
    changeList(state, updateList){
      return { ...updateList.payload };
    },
    addList(state, updateList) {
      return { ...updateList.payload };
    },
  }
});

export const { changeList, addList } = issue.actions

export default configureStore({
  reducer: { 
    issue : issue.reducer
  }
}) 