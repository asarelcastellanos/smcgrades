
export default function CoursePage({ params }: { params: { _id: any } }) {

    return (
        <div>
            <p>
                Course Page: {params._id}
            </p>
        </div>
    );
}
