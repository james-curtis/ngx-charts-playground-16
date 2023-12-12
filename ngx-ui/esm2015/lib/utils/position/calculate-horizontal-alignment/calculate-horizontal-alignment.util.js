import { horizontalPosition } from '../horizontal-position/horizontal-position.util';
/**
 * Calculate horz alignment position
 *
 * @param elDimensions
 * @param popoverDimensions
 * @param alignment
 *
 * @returns number
 */
export const calculateHorizontalAlignment = (elDimensions, popoverDimensions, alignment) => {
    let result = horizontalPosition(elDimensions, popoverDimensions, alignment);
    if (result + popoverDimensions.width > window.innerWidth) {
        result = window.innerWidth - popoverDimensions.width;
    }
    return result;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsY3VsYXRlLWhvcml6b250YWwtYWxpZ25tZW50LnV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtdWkvc3JjL2xpYi91dGlscy9wb3NpdGlvbi9jYWxjdWxhdGUtaG9yaXpvbnRhbC1hbGlnbm1lbnQvY2FsY3VsYXRlLWhvcml6b250YWwtYWxpZ25tZW50LnV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFFckY7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBRyxDQUMxQyxZQUF3QixFQUN4QixpQkFBNkIsRUFDN0IsU0FBeUIsRUFDakIsRUFBRTtJQUNWLElBQUksTUFBTSxHQUFHLGtCQUFrQixDQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUU1RSxJQUFJLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRTtRQUN4RCxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsR0FBRyxpQkFBaUIsQ0FBQyxLQUFLLENBQUM7S0FDdEQ7SUFFRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaW1lbnNpb25zIH0gZnJvbSAnLi4vZGltZW5zaW9ucy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQWxpZ25tZW50VHlwZXMgfSBmcm9tICcuLi9hbGlnbm1lbnQtdHlwZXMuZW51bSc7XG5pbXBvcnQgeyBob3Jpem9udGFsUG9zaXRpb24gfSBmcm9tICcuLi9ob3Jpem9udGFsLXBvc2l0aW9uL2hvcml6b250YWwtcG9zaXRpb24udXRpbCc7XG5cbi8qKlxuICogQ2FsY3VsYXRlIGhvcnogYWxpZ25tZW50IHBvc2l0aW9uXG4gKlxuICogQHBhcmFtIGVsRGltZW5zaW9uc1xuICogQHBhcmFtIHBvcG92ZXJEaW1lbnNpb25zXG4gKiBAcGFyYW0gYWxpZ25tZW50XG4gKlxuICogQHJldHVybnMgbnVtYmVyXG4gKi9cbmV4cG9ydCBjb25zdCBjYWxjdWxhdGVIb3Jpem9udGFsQWxpZ25tZW50ID0gKFxuICBlbERpbWVuc2lvbnM6IERpbWVuc2lvbnMsXG4gIHBvcG92ZXJEaW1lbnNpb25zOiBEaW1lbnNpb25zLFxuICBhbGlnbm1lbnQ6IEFsaWdubWVudFR5cGVzXG4pOiBudW1iZXIgPT4ge1xuICBsZXQgcmVzdWx0ID0gaG9yaXpvbnRhbFBvc2l0aW9uKGVsRGltZW5zaW9ucywgcG9wb3ZlckRpbWVuc2lvbnMsIGFsaWdubWVudCk7XG5cbiAgaWYgKHJlc3VsdCArIHBvcG92ZXJEaW1lbnNpb25zLndpZHRoID4gd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICByZXN1bHQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIHBvcG92ZXJEaW1lbnNpb25zLndpZHRoO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iXX0=