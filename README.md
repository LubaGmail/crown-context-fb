What's in it?
    GraphQL, Firebase, optimization, React Devtools.

Tuts:
    https://crwn-clothing.com/
    https://www.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/31664006#overview
    https://graphql.org/learn/

GraphQL vs Redux
    Both act as a single source of thruth

    pros:   caching ( happens by the query, not by the data )
    
    cons:   GraphQL has to be supported from the back-end

Optimization 1:
    useCallback, useMemo and memo

Optimization 2:
    Code splitting - split bundle.js into appropriate quantities.  If I am at the Landing page, give me only code the Landing page.
        Is achieved via dynamic imports - lazy/Suspense/fallback.