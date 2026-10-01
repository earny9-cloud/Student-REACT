function StudentCard({ name, major, score }) {
return (
<div className="card">
<h3>{name}</h3>
<p>{major}</p>
<p>{score} · {score >= 60 ? "Passed" : "Failed"}</p>
</div>
);
}
export default StudentCard;