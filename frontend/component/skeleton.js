export default function Skeleton() {
    return (
        <div className="animate-pulse space-y-4 p-6 max-w-3xl mx-auto">
            <div className="bg-gray-300 h-64 w-full rounded-xl"></div>
            <div className="h-6 w-1/2 bg-gray-300 rounded"></div>
            <div className="h-4 w-full bg-gray-300 rounded"></div>
            <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
        </div>
    );
}
