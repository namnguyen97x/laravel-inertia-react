import { useState } from "react";
import { Link, usePage } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Home({ posts }) {
    const { flash } = usePage().props;
    const route = useRoute();
    const [flashMsg, setFlashMsg] = useState(flash.message);

    setTimeout(() => {
        setFlashMsg(null);
    }, 2000);

    return (
        <>
            <h1 className="title">Hello</h1>
            {flashMsg && (
                <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {flashMsg}
                </div>
            )}

            {posts.data.map((post) => (
                <div key={post.id} className="p-4 border-b">
                    <div className="text-sm text-slate-600">
                        <span>Posted </span>
                        <span>
                            {new Date(post.created_at).toLocaleTimeString()}
                        </span>
                    </div>
                    <p className="font-medium">{post.body}</p>
                    <Link
                        href={route("posts.show", post)}
                        className="inline-block text-sm text-blue-500 hover:text-blue-400"
                    >
                        Read more...
                    </Link>
                </div>
            ))}

            <div>
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${
                                link.active ? "text-blue-500 font-bold" : ""
                            }`}
                        />
                    ) : (
                        <span>
                            <Link
                                key={link.label}
                                href={link.url}
                                dangerouslySetInnerHTML={{ __html: link.label }}
                                className={`p-1 mx-1 ${
                                    link.active ? "text-slate-300" : ""
                                }`}
                            />
                        </span>
                    )
                )}
            </div>
        </>
    );
}
