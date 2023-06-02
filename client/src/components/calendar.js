import { Gantt, Task, EventOption, StylingOption, ViewMode, DisplayOption } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import { useQuery } from '../hooks/useQuery';
import { useEffect, useState } from 'react';

const MAX_GRADE = 10;
const dataUrls = ["/topics?withLessons=true", "/practices/stats"];
export function Calendar() {
    const {data} = useQuery(dataUrls);

    const [calendarData, setCalendarData] = useState(null);

    const getProgressByPracticeResults = (practiceIds) => {
        if (!practiceIds.length) {
            return 0;
        }

        const allUserResults = data[1];
        const maxPossibleResult = practiceIds.length * MAX_GRADE;
        const userTotalResult = practiceIds.reduce((acc, practiceId) => {
            const practiceResult = allUserResults[practiceId]?.result || 0;

            return acc + practiceResult;
        }, 0);

        return Math.round(userTotalResult / maxPossibleResult * 100);
    }

    useEffect(() => {
        const preparedData = data?.[0].topics.reduce((acc, topic) => {
            const parentTopic = {
                start: new Date(topic.startDate),
                end: new Date(topic.endDate),
                name: topic.name,
                id: topic._id,
                type: 'project',
                progress: 100,
                isDisabled: true,
                hideChildren: false,
            };
    
            acc.push(parentTopic);
    
            if (topic.lessons) {
                topic.lessons.forEach((lesson, index) => {
                    const topicStartDate = new Date(topic.startDate);
                    const topicEndDate = new Date(topic.endDate);
    
                    const topicDurationMS = topicEndDate - topicStartDate;
                    const lessonDurationMS = topicDurationMS / topic.lessons.length;
    
                    acc.push({
                        start: new Date(topicStartDate.getTime() + index * lessonDurationMS),
                        end: new Date(topicStartDate.getTime() + (index + 1) * lessonDurationMS),
                        name: lesson.name,
                        project: topic._id,
                        id: lesson._id,
                        dependencies: index === 0 ? [] : [acc[acc.length - 1].id],
                        type: 'task',
                        progress: getProgressByPracticeResults(lesson.practices),
                        isDisabled: true,
                    })
                });
            }
    
            return acc;
        }, []);

        setCalendarData(preparedData);
    }, [data])

    const handleExpanderClick = (task) => {
        setCalendarData(calendarData.map(t => (t.id === task.id ? task : t)));
    };

    return (
        <div className="mb-3  w-full ">
            {calendarData && <Gantt tasks={calendarData} locale='ru' listCellWidth={window.innerWidth > 800 ? "160px" : ""} onExpanderClick={handleExpanderClick}/>}
        </div>
    );
}