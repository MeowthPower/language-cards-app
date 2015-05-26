class AddTranslations < ActiveRecord::Migration
  def change
    create_table :tranlations do |t|

      t.string :translation
      t.string :languaage
      t.string :phonetic
      t.string :meaning

      t.integer :user_id
      t.integer :card_id

      t.timestamps null: false
    end
  end
end
