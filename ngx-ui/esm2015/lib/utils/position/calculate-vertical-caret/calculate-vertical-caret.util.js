import { AlignmentTypes } from '../alignment-types.enum';
import { CARET_OFFSET } from '../caret-offset.constant';
import { verticalPosition } from '../vertical-position/vertical-position.util';
/**
 * Calculate vertical caret position
 *
 * @param elDimensions
 * @param popoverDimensions
 * @param caretDimensions
 * @param alignment
 *
 * @memberOf PositionHelper
 */
export const calculateVerticalCaret = (elDimensions, popoverDimensions, caretDimensions, alignment) => {
    let result;
    if (alignment === AlignmentTypes.top) {
        result = elDimensions.height / 2 - caretDimensions.height / 2 + CARET_OFFSET;
    }
    if (alignment === AlignmentTypes.bottom) {
        result = popoverDimensions.height - elDimensions.height / 2 - caretDimensions.height / 2 - CARET_OFFSET;
    }
    if (alignment === AlignmentTypes.center) {
        result = popoverDimensions.height / 2 - caretDimensions.height / 2;
    }
    const popoverPosition = verticalPosition(elDimensions, popoverDimensions, alignment);
    if (popoverPosition + popoverDimensions.height > window.innerHeight) {
        result += popoverPosition + popoverDimensions.height - window.innerHeight;
    }
    return result;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlLXZlcnRpY2FsLWNhcmV0LnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi91dGlscy9wb3NpdGlvbi9jYWxjdWxhdGUtdmVydGljYWwtY2FyZXQvY2FsY3VsYXRlLXZlcnRpY2FsLWNhcmV0LnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUUvRTs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBRyxDQUNwQyxZQUF3QixFQUN4QixpQkFBNkIsRUFDN0IsZUFBMkIsRUFDM0IsU0FBeUIsRUFDakIsRUFBRTtJQUNWLElBQUksTUFBYyxDQUFDO0lBRW5CLElBQUksU0FBUyxLQUFLLGNBQWMsQ0FBQyxHQUFHLEVBQUU7UUFDcEMsTUFBTSxHQUFHLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQztLQUM5RTtJQUVELElBQUksU0FBUyxLQUFLLGNBQWMsQ0FBQyxNQUFNLEVBQUU7UUFDdkMsTUFBTSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxZQUFZLENBQUM7S0FDekc7SUFFRCxJQUFJLFNBQVMsS0FBSyxjQUFjLENBQUMsTUFBTSxFQUFFO1FBQ3ZDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLGVBQWUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0tBQ3BFO0lBRUQsTUFBTSxlQUFlLEdBQUcsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3JGLElBQUksZUFBZSxHQUFHLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFO1FBQ25FLE1BQU0sSUFBSSxlQUFlLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7S0FDM0U7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi4vZGltZW5zaW9ucy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQWxpZ25tZW50VHlwZXMgfSBmcm9tICcuLi9hbGlnbm1lbnQtdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBDQVJFVF9PRkZTRVQgfSBmcm9tICcuLi9jYXJldC1vZmZzZXQuY29uc3RhbnQnO1xuaW1wb3J0IHsgdmVydGljYWxQb3NpdGlvbiB9IGZyb20gJy4uL3ZlcnRpY2FsLXBvc2l0aW9uL3ZlcnRpY2FsLXBvc2l0aW9uLnV0aWwnO1xuXG4vKipcbiAqIENhbGN1bGF0ZSB2ZXJ0aWNhbCBjYXJldCBwb3NpdGlvblxuICpcbiAqIEBwYXJhbSBlbERpbWVuc2lvbnNcbiAqIEBwYXJhbSBwb3BvdmVyRGltZW5zaW9uc1xuICogQHBhcmFtIGNhcmV0RGltZW5zaW9uc1xuICogQHBhcmFtIGFsaWdubWVudFxuICpcbiAqIEBtZW1iZXJPZiBQb3NpdGlvbkhlbHBlclxuICovXG5leHBvcnQgY29uc3QgY2FsY3VsYXRlVmVydGljYWxDYXJldCA9IChcbiAgZWxEaW1lbnNpb25zOiBEaW1lbnNpb25zLFxuICBwb3BvdmVyRGltZW5zaW9uczogRGltZW5zaW9ucyxcbiAgY2FyZXREaW1lbnNpb25zOiBEaW1lbnNpb25zLFxuICBhbGlnbm1lbnQ6IEFsaWdubWVudFR5cGVzXG4pOiBudW1iZXIgPT4ge1xuICBsZXQgcmVzdWx0OiBudW1iZXI7XG5cbiAgaWYgKGFsaWdubWVudCA9PT0gQWxpZ25tZW50VHlwZXMudG9wKSB7XG4gICAgcmVzdWx0ID0gZWxEaW1lbnNpb25zLmhlaWdodCAvIDIgLSBjYXJldERpbWVuc2lvbnMuaGVpZ2h0IC8gMiArIENBUkVUX09GRlNFVDtcbiAgfVxuXG4gIGlmIChhbGlnbm1lbnQgPT09IEFsaWdubWVudFR5cGVzLmJvdHRvbSkge1xuICAgIHJlc3VsdCA9IHBvcG92ZXJEaW1lbnNpb25zLmhlaWdodCAtIGVsRGltZW5zaW9ucy5oZWlnaHQgLyAyIC0gY2FyZXREaW1lbnNpb25zLmhlaWdodCAvIDIgLSBDQVJFVF9PRkZTRVQ7XG4gIH1cblxuICBpZiAoYWxpZ25tZW50ID09PSBBbGlnbm1lbnRUeXBlcy5jZW50ZXIpIHtcbiAgICByZXN1bHQgPSBwb3BvdmVyRGltZW5zaW9ucy5oZWlnaHQgLyAyIC0gY2FyZXREaW1lbnNpb25zLmhlaWdodCAvIDI7XG4gIH1cblxuICBjb25zdCBwb3BvdmVyUG9zaXRpb24gPSB2ZXJ0aWNhbFBvc2l0aW9uKGVsRGltZW5zaW9ucywgcG9wb3ZlckRpbWVuc2lvbnMsIGFsaWdubWVudCk7XG4gIGlmIChwb3BvdmVyUG9zaXRpb24gKyBwb3BvdmVyRGltZW5zaW9ucy5oZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICByZXN1bHQgKz0gcG9wb3ZlclBvc2l0aW9uICsgcG9wb3ZlckRpbWVuc2lvbnMuaGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iXX0=