import Navbar from "./components/Navbar";
import NotesContainer from "./components/NotesContainer";
import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";

function App() {
	return (
		<>
			<Navbar />
			<NotesContainer>
				<NotesForm />
				<NotesList />
			</NotesContainer>
		</>
	);
}

export default App;
