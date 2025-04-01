export default function DSA() {
    return (
        <>
            <h2>DSA Cheat Sheet</h2>
            <div className="section" id="data-structs">
                <h3>Data Structures</h3>
                <ul>
                    <li><strong>Array:</strong> O(1) access, O(n) insert/delete</li>
                    <li><strong>Linked List:</strong> O(1) insert/delete at known position</li>
                    <li><strong>Stack:</strong> LIFO, O(1) push/pop</li>
                    <li><strong>Queue:</strong> FIFO, O(1) enqueue/dequeue</li>
                    <li><strong>Hash Table:</strong> O(1) average lookup</li>
                    <li><strong>Binary Tree:</strong> O(h) operations, h = height</li>
                    <li><strong>Heap:</strong> O(log n) insert/extract</li>
                    <li><strong>Graph:</strong> O(V + E) traversal</li>
                </ul>
            </div>
            <div className="section" id="algos">
                <h3>Algorithms</h3>
                <ul>
                    <li><strong>Quick Sort:</strong> O(n log n) average</li>
                    <li><strong>Binary Search:</strong> O(log n), sorted data</li>
                    <li><strong>DFS/BFS:</strong> O(V + E) for graphs</li>
                    <li><strong>Dijkstra’s:</strong> O((V + E) log V), shortest path</li>
                </ul>
            </div>
            <div className="section" id="complexity">
                <h3>Time &amp; Space Complexity</h3>
                <p>O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(2ⁿ)</p>
            </div>
            <div className="section" id="coding-patterns">
                <h3>Coding Patterns</h3>
                <ul>
                    <li><strong>Two Pointers:</strong> Fast/slow, sliding window</li>
                    <li><strong>Dynamic Programming:</strong> Memoization, tabulation</li>
                    <li><strong>Backtracking:</strong> Explore all possibilities</li>
                </ul>
            </div>
        </>
    )
}