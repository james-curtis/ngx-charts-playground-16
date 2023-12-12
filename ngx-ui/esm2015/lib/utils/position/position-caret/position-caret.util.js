import { PlacementTypes } from '../placement-type.enum';
import { calculateVerticalCaret } from '../calculate-vertical-caret/calculate-vertical-caret.util';
import { calculateHorizontalCaret } from '../calculate-horizontal-caret/calculate-horizontal-caret.util';
import { CARET_OFFSET } from '../caret-offset.constant';
/**
 * Position caret
 *
 * @param placement
 * @param elmDim
 * @param hostDim
 * @param caretDimensions
 * @param alignment
 *
 * @returns ({ top: number; left: number; })
 */
export const positionCaret = (placement, elmDim, hostDim, caretDimensions, alignment) => {
    let top = 0;
    let left = 0;
    if (placement === PlacementTypes.right) {
        left = -1 * CARET_OFFSET;
        top = calculateVerticalCaret(hostDim, elmDim, caretDimensions, alignment);
    }
    else if (placement === PlacementTypes.left) {
        left = elmDim.width;
        top = calculateVerticalCaret(hostDim, elmDim, caretDimensions, alignment);
    }
    else if (placement === PlacementTypes.top) {
        top = elmDim.height;
        left = calculateHorizontalCaret(hostDim, elmDim, caretDimensions, alignment);
    }
    else {
        top = -1 * CARET_OFFSET;
        left = calculateHorizontalCaret(hostDim, elmDim, caretDimensions, alignment);
    }
    return { top, left };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb24tY2FyZXQudXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC11aS9zcmMvbGliL3V0aWxzL3Bvc2l0aW9uL3Bvc2l0aW9uLWNhcmV0L3Bvc2l0aW9uLWNhcmV0LnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBR3hELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtEQUErRCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUV4RDs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQzNCLFNBQXlCLEVBQ3pCLE1BQWtCLEVBQ2xCLE9BQW1CLEVBQ25CLGVBQTJCLEVBQzNCLFNBQXlCLEVBQ00sRUFBRTtJQUNqQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDWixJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7SUFFYixJQUFJLFNBQVMsS0FBSyxjQUFjLENBQUMsS0FBSyxFQUFFO1FBQ3RDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxZQUFZLENBQUM7UUFDekIsR0FBRyxHQUFHLHNCQUFzQixDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0tBQzNFO1NBQU0sSUFBSSxTQUFTLEtBQUssY0FBYyxDQUFDLElBQUksRUFBRTtRQUM1QyxJQUFJLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNwQixHQUFHLEdBQUcsc0JBQXNCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDM0U7U0FBTSxJQUFJLFNBQVMsS0FBSyxjQUFjLENBQUMsR0FBRyxFQUFFO1FBQzNDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQ3BCLElBQUksR0FBRyx3QkFBd0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztLQUM5RTtTQUFNO1FBQ0wsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLFlBQVksQ0FBQztRQUN4QixJQUFJLEdBQUcsd0JBQXdCLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDOUU7SUFFRCxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBsYWNlbWVudFR5cGVzIH0gZnJvbSAnLi4vcGxhY2VtZW50LXR5cGUuZW51bSc7XG5pbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi4vZGltZW5zaW9ucy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQWxpZ25tZW50VHlwZXMgfSBmcm9tICcuLi9hbGlnbm1lbnQtdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBjYWxjdWxhdGVWZXJ0aWNhbENhcmV0IH0gZnJvbSAnLi4vY2FsY3VsYXRlLXZlcnRpY2FsLWNhcmV0L2NhbGN1bGF0ZS12ZXJ0aWNhbC1jYXJldC51dGlsJztcbmltcG9ydCB7IGNhbGN1bGF0ZUhvcml6b250YWxDYXJldCB9IGZyb20gJy4uL2NhbGN1bGF0ZS1ob3Jpem9udGFsLWNhcmV0L2NhbGN1bGF0ZS1ob3Jpem9udGFsLWNhcmV0LnV0aWwnO1xuaW1wb3J0IHsgQ0FSRVRfT0ZGU0VUIH0gZnJvbSAnLi4vY2FyZXQtb2Zmc2V0LmNvbnN0YW50JztcblxuLyoqXG4gKiBQb3NpdGlvbiBjYXJldFxuICpcbiAqIEBwYXJhbSBwbGFjZW1lbnRcbiAqIEBwYXJhbSBlbG1EaW1cbiAqIEBwYXJhbSBob3N0RGltXG4gKiBAcGFyYW0gY2FyZXREaW1lbnNpb25zXG4gKiBAcGFyYW0gYWxpZ25tZW50XG4gKlxuICogQHJldHVybnMgKHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlcjsgfSlcbiAqL1xuZXhwb3J0IGNvbnN0IHBvc2l0aW9uQ2FyZXQgPSAoXG4gIHBsYWNlbWVudDogUGxhY2VtZW50VHlwZXMsXG4gIGVsbURpbTogRGltZW5zaW9ucyxcbiAgaG9zdERpbTogRGltZW5zaW9ucyxcbiAgY2FyZXREaW1lbnNpb25zOiBEaW1lbnNpb25zLFxuICBhbGlnbm1lbnQ6IEFsaWdubWVudFR5cGVzXG4pOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSA9PiB7XG4gIGxldCB0b3AgPSAwO1xuICBsZXQgbGVmdCA9IDA7XG5cbiAgaWYgKHBsYWNlbWVudCA9PT0gUGxhY2VtZW50VHlwZXMucmlnaHQpIHtcbiAgICBsZWZ0ID0gLTEgKiBDQVJFVF9PRkZTRVQ7XG4gICAgdG9wID0gY2FsY3VsYXRlVmVydGljYWxDYXJldChob3N0RGltLCBlbG1EaW0sIGNhcmV0RGltZW5zaW9ucywgYWxpZ25tZW50KTtcbiAgfSBlbHNlIGlmIChwbGFjZW1lbnQgPT09IFBsYWNlbWVudFR5cGVzLmxlZnQpIHtcbiAgICBsZWZ0ID0gZWxtRGltLndpZHRoO1xuICAgIHRvcCA9IGNhbGN1bGF0ZVZlcnRpY2FsQ2FyZXQoaG9zdERpbSwgZWxtRGltLCBjYXJldERpbWVuc2lvbnMsIGFsaWdubWVudCk7XG4gIH0gZWxzZSBpZiAocGxhY2VtZW50ID09PSBQbGFjZW1lbnRUeXBlcy50b3ApIHtcbiAgICB0b3AgPSBlbG1EaW0uaGVpZ2h0O1xuICAgIGxlZnQgPSBjYWxjdWxhdGVIb3Jpem9udGFsQ2FyZXQoaG9zdERpbSwgZWxtRGltLCBjYXJldERpbWVuc2lvbnMsIGFsaWdubWVudCk7XG4gIH0gZWxzZSB7XG4gICAgdG9wID0gLTEgKiBDQVJFVF9PRkZTRVQ7XG4gICAgbGVmdCA9IGNhbGN1bGF0ZUhvcml6b250YWxDYXJldChob3N0RGltLCBlbG1EaW0sIGNhcmV0RGltZW5zaW9ucywgYWxpZ25tZW50KTtcbiAgfVxuXG4gIHJldHVybiB7IHRvcCwgbGVmdCB9O1xufTtcbiJdfQ==