/*
 * อย่าลืมเปลี่ยน fullName และ studentId ให้เป็นของตัวเอง
 */
export default function Footer(props: {year:number, fullname:string, studentId:string}) {
  return (
    <footer className="text-center w-100">
      <p className="text-white bg-secondary p-4 m-0">Copyright © {props.year} {props.fullname} {props.studentId}</p>
    </footer>
  );
}
