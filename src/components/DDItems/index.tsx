import React from 'react'
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult
} from 'react-beautiful-dnd'
import { useReportContext, IReportContext } from 'context/ReportContext'
import { IReportItem } from 'types/report'
import ItemReport from 'components/ItemReport'

const DDItems: React.FC = () => {
  const {
    reportItems,
    setReportItems,
    setSelectedItem
  } = useReportContext() as IReportContext

  const handleDelete = (selectedItem: IReportItem) => {
    const items = reportItems.filter(items => items.id !== selectedItem.id)
    return setReportItems([...items])
  }

  const handleItem = (selectedItem: IReportItem) => {
    const itemIndex = reportItems.findIndex(
      items => items.id === selectedItem.id
    )
    return setSelectedItem(itemIndex)
  }
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return
    const reordedItems = reportItems
    const [reorderedItem] = reordedItems.splice(result.source.index, 1)
    reordedItems.splice(result.destination.index, 0, reorderedItem)

    setReportItems([...reordedItems])
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="itensList">
        {provided => (
          <ul
            className="itensList"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {reportItems.map((item, index) => {
              return (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {provided => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ItemReport
                        item={item}
                        onItemSelect={handleItem}
                        handleDeleteItem={handleDelete}
                      />
                    </li>
                  )}
                </Draggable>
              )
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DDItems
