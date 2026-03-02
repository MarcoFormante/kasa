import { Loading as LoadingPage } from "./components/Loading/Loading";
/**
 * Loading UI Component.
 * @component Loading
 * @description
 * <section style="padding: 10px; border-left: 3px solid #FF6060;">
 * <h3>Route Segment Loading UI</h3>
 * <p>This is a specialized Next.js component that acts as a streaming boundary. It is automatically rendered by the framework while a route segment is being fetched or during data-heavy server transitions.</p>
 * <p><strong>Key Features:</strong></p>
 * <ul>
 * <li><b>Instant Feedback:</b> Prevents white screens by showing an immediate UI spinner.</li>
 * <li><b>Global Wrapper:</b> Uses the specialized {@link LoadingPage} to maintain visual consistency.</li>
 * <li><b>Non-Blocking:</b> Allows the user to interact with the Header and Navigation while content loads.</li>
 * </ul>
 * </section>
 * @returns {JSX.Element} The rendered global LoadingPage component.
 */
function Loading(){
    return <LoadingPage/>
}


export default Loading