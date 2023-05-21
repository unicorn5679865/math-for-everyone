import Button from "../common/Button";
import { useQuery } from "../../hooks/useQuery";
import { useNavigate } from "react-router";


const getLocalDate = (date) => {
    return new Date(date).toLocaleDateString();
};

const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
};

export default function TopicsForControl() {
    const {data} = useQuery("/topics?withFinalResults=true");

    const navigate = useNavigate();

    const handleStartFinalTest = (topicId) => {
        navigate(`/knowledge-control/${topicId}`);
    };
    
    const todayDate = new Date();

    return (
        <div className="mb-3 h-full w-full p-5">
            <h2 className="text-4xl font-extrabold my-5">Тематический контроль</h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-gray-700 uppercase bg-gray-300">
                        <tr>
                            <th className="px-6 py-3">
                                #
                            </th>
                            <th className="px-6 py-3">
                                Тема
                            </th>
                            <th className="px-6 py-3">
                                Сдать До
                            </th>
                            <th className="px-6 py-3">
                                Оценка
                            </th>
                            <th className="px-6 py-3"/>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.topics.map((topic, index) => (
                            <tr key={topic._id} className="bg-white border-b">
                                <th width="3%" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                    {index + 1}
                                </th>
                                <td width="50%" className="px-6 py-4">
                                    {topic.name}
                                </td>
                                <td className="px-6 py-4">
                                    {getLocalDate(topic.endDate)}
                                </td>
                                <td className="px-6 py-4">
                                    <b>
                                        {(topic.finalPractice && topic.finalPractice.userResult?.length) ? topic.finalPractice.userResult[0].result : 'N/A'}
                                    </b>
                                </td>
                                <td className="px-6 py-4">
                                    {/* поменять потом дату, на 7 например (тогда тест будет открываться за неделю до конца темы) */}
                                    {todayDate > addDays(new Date(topic.endDate), -57) ?
                                        <Button onClick={() => handleStartFinalTest(topic._id)} disabled={topic.finalPractice && topic.finalPractice.userResult?.length}>
                                            Начать
                                        </Button> : `Будет доступно ${ getLocalDate(addDays(new Date(topic.endDate), -7)) }`}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}