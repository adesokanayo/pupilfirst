class OneTimePurchasePlan < ApplicationRecord
  has_one :payment_plan, as: :plan, dependent: :restrict_with_error
end
