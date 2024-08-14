import { useForm } from "@inertiajs/react";

export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        body: "",
    });
    function submit(e) {
        e.preventDefault();
        post("/posts");
    }
    return (
        <>
            <h1 className="title">Create New Post</h1>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <textarea
                        rows={10}
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                    />
                    {errors.body && <p className="error">{errors.body}</p>}
                    <button className="primary-btn mt-4">Submit</button>
                </form>
            </div>
        </>
    );
}
